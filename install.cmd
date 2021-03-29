@echo off

@REM call npm install

@echo Building backend...
cd src\backend
call npx tsc
cd ..
cd ..

cd src\frontend
@echo Building frontend...
call npx tsc
cd ..
cd ..

@echo Building development utilties
cd NodeUtils
call npx tsc
cd ..