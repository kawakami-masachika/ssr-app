# 全てのmoduleで必要な依存関係を解決し、dbのcontainerを立ち上げます
initialize-all: frontend-init backend-init db-init db-migrate db-seed

# frontendの立ち上げに必要な依存関係を解決します
frontend-init:
	@echo "initializing frontend modules..."
	@cd ../frontend && pnpm install
	@echo "frontend initialization successfully completed!"

# backendの立ち上げに必要な依存関係を解決し、dbの初期化を行います
backend-init:
	@echo "initializing backend modules..."
	@cd ../backend && pnpm install
	@echo "backend initialization successfully completed!"

# dbのcontainerを立ち上げます
db-init:
	@echo "initializing postgresql docker container..."
	docker compose up -d
	@echo "database initialization successfully completed!"

# dbをスキーマに従ってマイグレーションします
db-migrate:
	@echo "migrating database..."
	@cd ../backend && pnpm db:migrate
	@echo "completed!"

# dbにサンプルデータを投入します
db-seed:
	@echo "seeding data..."
	@cd ../backend && pnpm db:seed
	@echo "completed!"

# インストールした全ての依存関係を削除し、初期化します
allclean:
	@echo "clean all installed modules and delete db container"
	@echo "frontend cleaning..."
	@cd ../frontend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo "completed!"
	@echo "backend cleaning..."
	@cd ../backend && rm -rf node_modules && rm -rf pnpm-lock.yaml
	@echo "completed!"
	@echo "docker cleaning..."
	docker container rm -f postgres
	docker volume rm -f infrastructure_db-store
	@echo "completed!"