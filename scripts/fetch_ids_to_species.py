import os
import mysql.connector
import json

def main():
    connection = mysql.connector.connect(
        host=os.environ["DB_HOST"],
        user=os.environ["DB_USER"],
        password=os.environ["DB_PASS"],
        database=os.environ["DB_NAME"]
    )
    try:
        cursor = connection.cursor()
        query = """
            SELECT tree_id, name_unformatted
            FROM taxon
            WHERE sequence = 1
            ORDER BY tree_id
        """
        cursor.execute(query)
        rows = cursor.fetchall()
        tree_map = {}
        for row in rows:
            tree_id, name_unformatted = row
            tree_map[tree_id] = name_unformatted
        with open('tree_data.json', 'w') as outfile:
            json.dump(tree_map, outfile, indent=2)
        print("JSON file written successfully!")
    finally:
        cursor.close()
        connection.close()

if __name__ == "__main__":
    main()
