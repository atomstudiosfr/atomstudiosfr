.DEFAULT_GOAL := install

PYTHON_VERSION := python3.10

.PHONY: install
install:
	npm i --force

.PHONY: run
run:
	npm start
