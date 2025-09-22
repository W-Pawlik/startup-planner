db = db.getSiblingDB("startup_planner");

db.createUser({
  user: "appuser",
  pwd: "apppass",
  roles: [{ role: "readWrite", db: "startup_planner" }],
});

db.createCollection("init_check");
db.init_check.insertOne({ initialized: true, at: new Date() });
