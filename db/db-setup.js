use dashboarddb;

db.createUser({
  user: "dashboarduser",
  pwd: "dbpass",
  "roles": [
    {
      "role": "readWrite",
      "db": "dashboarddb"
    }
  ]
});