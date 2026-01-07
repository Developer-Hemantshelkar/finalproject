from flask import Flask, render_template, request, redirect, session
import mysql.connector

app = Flask(__name__)
app.secret_key = "kheti_saathi_secret"

def db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="kheti_saathi"
    )

@app.route("/")
def home():
    return render_template("index.html")

# -------- SIGNUP --------
@app.route("/signup", methods=["POST"])
def signup():
    name = request.form["name"]
    email = request.form["email"]
    password = request.form["password"]
    role = request.form["role"]

    db = db_connection()
    cur = db.cursor()
    cur.execute(
        "INSERT INTO users (name, email, password, role) VALUES (%s, %s, %s, %s)",
        (name, email, password, role)
    )
    db.commit()
    db.close()

    return redirect("/")

# -------- LOGIN --------
@app.route("/login", methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]

    db = db_connection()
    cur = db.cursor()
    cur.execute(
        "SELECT name FROM users WHERE email=%s AND password=%s",
        (email, password)
    )
    user = cur.fetchone()
    db.close()

    if user:
        session["user"] = user[0]
        return redirect("/dashboard")
    return redirect("/")

# -------- DASHBOARD --------
@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return redirect("/")
    return render_template("dashboard.html", user=session["user"])

# @app.route("/dashboard")
# def dashboard():
#     if "user" not in session:
#         return redirect("/")
#     return render_template("dashboard.html")


#------------ADMIN------------

@app.route("/admin")
def admin():
    if "role" not in session or session["role"] != "admin":
        return redirect("/")
    return render_template("admin.html")

# -------- LOGOUT --------
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/submit-quiz", methods=["POST"])
def submit_quiz():
    data = request.json
    score = data["score"]
    total = data["total"]
    email = session["email"]

    db = db_connection()
    cur = db.cursor()
    cur.execute(
      "INSERT INTO quiz_scores (user_email, score, total) VALUES (%s,%s,%s)",
      (email, score, total)
    )
    db.commit()
    db.close()
    return "", 200

@app.route("/add-question", methods=["POST"])
def add_question():
    if session["role"] != "admin":
        return redirect("/")

    data = request.form
    db = db_connection()
    cur = db.cursor()
    cur.execute(
      "INSERT INTO quiz_questions VALUES (NULL,%s,%s,%s,%s,%s,%s)",
      (data["question"], data["opt1"], data["opt2"],
       data["opt3"], data["opt4"], data["answer"])
    )
    db.commit()
    db.close()
    return redirect("/admin")
