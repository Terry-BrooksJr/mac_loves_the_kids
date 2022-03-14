import flask
from flask import (Response, json, redirect, render_template, request, session,
url_for)
import csv
from app import app


@app.route('/')
@app.route('/home')
def home():
        return render_template('index.html')
    
@app.route('/listserv',  methods=['POST'])
def mailing_list_signup():
    name = request.form['name']
    email = request.form['email']
    with open('mailing_list.csv', 'w') as csvfile:
        fieldnames = ['subscriber_name', 'subscriber_email']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerow({'subscriber_name':name, 'subscriber_email': email})
        return redirect(url_for(home),signed_up=True)
