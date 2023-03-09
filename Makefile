install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

fix:
	npx eslint --fix .

publish:
	npm publish

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js
	
brain-calc:
	node bin/brain-calc.js
	