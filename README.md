[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4884a72b545947dd84ed6061fe5614d2)](https://www.codacy.com?utm_source=gitlab.com&amp;utm_medium=referral&amp;utm_content=mgtz-platform/mgtz-platform-backend-int&amp;utm_campaign=Badge_Grade)


# Production Environment Variables

NODE_ENV = "production" // Setting production mode

API_JSON_SIZE_LIMIT // JSON Payload Size Limit, Default 100mb
API_URLENCODED_SIZE_LIMIT // Urlencoded Payload Size Limit, Default 100mb

DB_HOST=ms-hackathon-chennai.mysql.database.azure.com
DB_PORT
DB_URL // e.g. "mysql://root@localhost/mgtz_platform"
DB_DATABASE
DB_USERNAME
DB_PASSWORD
DB_CONNECTOR // optional, "mysql" by default

API_ROOT // optional, "/api" by default
API_HOST // optional, "0.0.0.0" by default
API_PORT // optional, "3000" by default
LOG_LEVEL // optional, "info" by default

AWS_ACCESS_KEY
AWS_SECRET
AWS_S3_REGION // Region of S3 Bucket
AWS_S3_BUCKET // Bucket name
AWS_S3_FOLDER // Folder name
AWS_SIGNED_URL_EXPIRE // optional, "300" by default
