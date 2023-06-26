# 全てのmoduleで必要な依存関係を解決し、dbのcontainerを立ち上げます
initialize-all: cowsay-initialize-start frontend-init backend-init db-init db-migrate db-seed cowsay-initialize-end

cowsay-initialize-start:
	@cd ./backend && pnpx cowsay "環境構築始めます"

cowsay-initialize-end:
	@cd ./backend && pnpx cowsay "終わったよ"

# frontendの立ち上げに必要な依存関係を解決します
frontend-init:
	@echo "frontendの依存関係を解決します"
	@cd ./frontend && pnpm install
	@echo

# backendの立ち上げに必要な依存関係を解決し、dbの初期化を行います
backend-init:
	@echo "backendの依存関係を解決します"
	@cd ./backend && pnpm install
	@echo

# compassプロジェクトを立ち上げます
run-server:
	@echo "サーバーを立ち上げます"
	@cd ./compass && ./gradlew bootRun

clean-server:
	@echo "ビルドキャッシュを削除します"
	@cd ./compass && ./gradlew clean
	@echo "完了しました"

# dbのcontainerを立ち上げます
db-init:
	@echo "Dockerコンテナを立ち上げます"
	@cd ./infrastructure && docker compose up -d
	@echo

# dbをスキーマに従ってマイグレーションします
db-migrate:
	@echo "データベースのマイグレーションを開始します"
	@cd ./study-group && ./gradlew flywayMigrate

db-codegen:
	@echo "データベースからコード生成を開始します"
	@cd ./study-group && ./gradlew generateJooq

# dbにサンプルデータを投入します
db-seed:
	@echo "サンプルデータの投入を開始します"
	@cd ./backend && pnpm db:seed
	@echo

# インストールした全ての依存関係を削除し、初期化します
allclean:
	@echo "インストールした全ての依存関係とコンテナを削除します"
	@echo "frontendの依存関係を削除します"
	@cd ./frontend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo $(success)
	@echo "backendの依存関係を削除します"
	@cd ./backend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo $(success)
	@echo "Dockerコンテナを削除します"
	@cd ./infrastructure && docker compose down -v
	@echo "完了しました"