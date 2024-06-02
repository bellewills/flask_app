from flask import Flask, render_template, jsonify
import pandas as pd
import sqlite3

app = Flask(__name__, template_folder='templates')

def get_db_connection():
    conn = sqlite3.connect('aqi_database.db')
    conn.row_factory = sqlite3.Row
    return conn

def list_tables(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = [row[0] for row in cursor.fetchall()]
    return tables

@app.route('/')
def index():
    conn = get_db_connection()
    tables = list_tables(conn)
    table_data = {}
    for table in tables:
        query = f"SELECT * FROM {table};"
        df = pd.read_sql_query(query, conn)
        table_data[table] = df.to_html(classes='data', header=True, index=False)
    conn.close()
    return render_template('index.html', tables=table_data)

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM measurements")
    rows = cursor.fetchall()
    conn.close()
    data = [dict(ix) for ix in rows]
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5100)
