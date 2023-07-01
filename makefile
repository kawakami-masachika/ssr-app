# 全てのmoduleで必要な依存関係を解決し、dbのcontainerを立ち上げます
initialize-all: cowsay-initialize-start frontend-init backend-init cowsay-initialize-end

cowsay-initialize-start:
	@cd ./frontend && pnpx cowsay "環境構築始めます"

cowsay-initialize-end:
	@cd ./frontend && pnpx cowsay "終わったよ"

frontend-init:
	@echo "frontendの依存関係を解決します"
	@cd ./frontend && pnpm install
	@echo

backend-build:
	@echo "ビルドします"
	@cd ./study-group && ./gradlew build --stacktrace

backend-resolve-dependency:
	@echo "依存関係を解決します"
	@cd ./study-group && ./gradlew --stacktrace

backend-run:
	@echo "サーバーを立ち上げます"
	@cd ./study-group && ./gradlew bootRun

backend-clean:
	@echo "ビルドキャッシュを削除します"
	@cd ./study-group && ./gradlew clean
	@echo "完了しました"

# dbのcontainerを立ち上げます
db-up:
	@echo "Dockerコンテナを立ち上げます"
	@cd ./infrastructure && docker compose up -d
	@echo

db-down:
	@echo "Dockerコンテナを削除します"
	@cd ./infrastructure && docker compose down -v

flyway-migrate:
	@echo "データベースのマイグレーションを開始します"
	@cd ./study-group && ./gradlew flywayMigrate

flyway-clean:
	@echo "データベースのマイグレーションを開始します"
	@cd ./study-group && ./gradlew flywayClean

jooq-codegen:
	@echo "データベースからコード生成を開始します"
	@cd ./study-group && ./gradlew generateJooq

jooq-clean:
	@echo "データベースからのコード削除を開始します"
	@cd ./study-group && ./gradlew cleanGenerateJooq

backend-init: db-down db-up backend-resolve-dependency backend-build

# インストールした全ての依存関係を削除し、初期化します
allclean:
	@echo "インストールした全ての依存関係とコンテナを削除します"
	@echo "frontendの依存関係を削除します"
	@cd ./frontend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo $(success)
	@echo "backendの依存関係を削除します"
	@cd ./study-group && ./gradlew clean
	@make jooq-clean && make flyway-clean
	@echo "Dockerコンテナを削除します"
	@cd ./infrastructure && docker compose down -v
	@echo "完了しました"