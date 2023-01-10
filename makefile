# 全てのmoduleで必要な依存関係を解決し、dbのcontainerを立ち上げます
initialize-all: frontend-init backend-init db-init db-migrate db-seed

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

# dbのcontainerを立ち上げます
db-init:
	@echo "Dockerコンテナを立ち上げます"
	@cd ./infrastructure && docker compose up -d
	@echo

# dbをスキーマに従ってマイグレーションします
db-migrate:
	@echo "データベースのマイグレーションを開始します"
	@cd ./backend && pnpm db:migrate
	@echo

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
	@cd ./infrastructure && docker container rm -f postgres
	@cd ./infrastructure && docker volume rm -f infrastructure_db-store
	@echo "完了しました"