ThisBuild / version := "0.1.0-SNAPSHOT"

ThisBuild / scalaVersion := "3.3.1"

lazy val root = (project in file("."))
  .settings(
    name := "scalareactivo",
    libraryDependencies += "io.reactivex.rxjava2" % "rxjava" % "2.2.19"
  )
