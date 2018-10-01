# trying-coast

## Start

```bash
git clone git@github.com:your-user-name/trying-coast.git
cd trying-coast
make db/create
make db/migrate
```

## Dev

```bash
make nrepl # starts an nrepl server
```

```clojure
; in your editor, connect to the nrepl server
(coast)
```

```bash
curl http://localhost:1337 # or just open it in your browser
```

## Ship
```bash
make db/migrate
make clean
make server
```
