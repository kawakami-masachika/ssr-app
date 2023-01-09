## Schema変更方法
1. schema.prismaを直接編集・保存し、pnpm db:migrateコマンドを実行
2. 名前の入力が求められるので、編集した内容にsnake_caseで名前をつける + enter
3. migrationsフォルダ内にsqlが追加されていれば成功

schema定義方法は公式ドキュメント参照
https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate

## package構成が少し変則的になっている問題
prisma command内部のinstallロジックのバグでpnpmを利用していても内部でnpmを使うバグがあるので、@prisma/clientをinstallして解決している
https://github.com/prisma/prisma/discussions/12501