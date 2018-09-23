Copied from template
https://gitlab.com/lambdatronic/clojure-webapp-template.git


# My Project

FIXME: Describe your project here.

# Installation Requirements

- Java Development Kit (version 8+)
- [Clojure CLI tools](https://clojure.org/guides/getting_started)

# Usage

To build and run this web application, navigate to the toplevel
project directory and run:

```
$ clojure -A:cljsbuild
$ clojure -A:run [port] [dev|prod]
```

The website will then be available at http://localhost:3000 or on
whichever port you specified. In dev mode, server-side exceptions will
be displayed in the browser and Clojure source files will be reloaded
whenever you refresh the page. These features are disabled in prod
mode. If the second argument to run is omitted, it will default to
prod mode.

# Development

## Compile Clojurescript to Javascript

To compile the Clojurescript files under src/cljs to Javascript under
resources/public/cljs, navigate to the toplevel project directory and
run:

```
$ clojure -A:cljsbuild
```

The main Javascript entry point file will be written to
resources/public/cljs/app.js. The Clojurescript build options are read
from the toplevel cljsbuild.edn file.

## Launch Figwheel

To start the Figwheel server, navigate to the toplevel project
directory and run:

```
$ clojure -A:figwheel
```

This will start an http-kit webserver on http://localhost:3000, which
serves up the website in dev mode. It will also open an nREPL on port
7000, which provides the special command "(cljs-repl)" to switch from
a Clojure REPL to a Clojurescript REPL. Finally, any changes to CLJS
or CSS files will automatically be pushed to the browser when the
files are saved.

# License and Distribution

FIXME: Fill in this section.
