```
export AIRFLOW_HOME=~/airflow
pip install apache-airflow
pip install apache-airflow[all]
pip install redis
pip install flower
```

```
CREATE DATABASE `airflow`;
CREATE USER 'airflow'@'localhost' IDENTIFIED BY 'airflow';
GRANT CREATE ROUTINE, CREATE VIEW, ALTER, SHOW VIEW, CREATE, ALTER ROUTINE, EVENT, INSERT, SELECT, DELETE, TRIGGER, GRANT OPTION, REFERENCES, UPDATE, DROP, EXECUTE, LOCK TABLES, CREATE TEMPORARY TABLES, INDEX ON `airflow`.* TO 'airflow'@'localhost';
FLUSH PRIVILEGES;
```

```
vim ~/airflow/airflow.cfg
+ executor = CeleryExecutor
+ sql_alchemy_conn = sqla+mysql://airflow:airflow:@128.0.0.1:3306/airflow
under [celery] section:
+ broker_url = redis://127.0.0.1:6379/1
+ celery_result_backend = redis://127.0.0.1:6379/1
```

```
airflow initdb # once to init sql meta database
airflow webserver # to open airflow web app
airflow scheduler # to start scheduler
airflow worker # to start worker
airflow flower # to start celery web app
```
