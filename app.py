from flask import Flask, render_template
import csv
import os
import os
import glob

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recipes')
def recipes():
    recipes_data = []
    csv_path = os.path.join(os.path.dirname(__file__), 'recipes.csv')
    
    try:
        with open(csv_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                recipes_data.append({
                    'color_name': row['color_name'],
                    'ingredients': row['ingredients'].split(':'),
                    'step1': row['step1'],
                    'step2': row['step2'],
                    'step3': row['step3']
                })
    except FileNotFoundError:
        recipes_data = []
    
    return render_template('recipes.html', recipes=recipes_data)

@app.route('/gallery')
def gallery():
    src_path = os.path.join(app.static_folder, 'src')
    images = []
    
    os.makedirs(src_path, exist_ok=True)
    
    for i in range(1, 100):  
        img_path = os.path.join(src_path, f'img{i}.png')
        if os.path.exists(img_path):
            images.append(f'src/img{i}.png')
        else:
            break  
    
    return render_template('gallery.html', images=images)

if __name__ == '__main__':
    app.run(debug=True)