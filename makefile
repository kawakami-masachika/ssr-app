# 全てのmoduleで必要な依存関係を解決し、dbのcontainerを立ち上げます
initialize-all: cowsay-initialize-start frontend-init db-up db-migrate jooq-codegen cowsay-initialize-end

cowsay-initialize-start:
	@cd ./frontend && pnpx cowsay "環境構築始めます"

cowsay-initialize-end:
	@cd ./frontend && pnpx cowsay "終わったよ"

# frontendの立ち上げに必要な依存関係を解決します
frontend-init:
	@echo "frontendの依存関係を解決します"
	@cd ./frontend && pnpm install
	@echo

# backendプロジェクトをビルドします
build-server:
	@echo "サーバーをビルドします"
	@cd ./study-group && ./gradlew build --stacktrace

# backendプロジェクトを立ち上げます
run-server:
	@echo "サーバーを立ち上げます"
	@cd ./study-group && ./gradlew bootRun

clean-server:
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

backend-init: db-down db-up flyway-clean flyway-migrate jooq-clean jooq-codegen

# インストールした全ての依存関係を削除し、初期化します
allclean:
	@echo "インストールした全ての依存関係とコンテナを削除します"
	@echo "frontendの依存関係を削除します"
	@cd ./frontend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo $(success)
	@echo "Dockerコンテナを削除します"
	@cd ./infrastructure && docker compose down -v
	@echo "完了しました"