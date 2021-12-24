# Vitest setup hooks

<table>
<thead>
<tr>
<th>Happening</th>
<th>Expected</th>
</tr>
</thead>

<tbody>
<tr>
<td>

```sh
stdout | unknown test
global before all - expected to run before ALL tests

stdout | 1.test.js > test 1
global before each - exptected to run before EACH test file

stdout | 1.test.js > test 1
normal test 1

stdout | 1.test.js > test 1
global after each - expected to run after EACH test file

stdout | unknown test
global after all - expected to run after ALL tests

stdout | unknown test
global before all - expected to run before ALL tests

stdout | 2.test.js > test 2
global before each - exptected to run before EACH test file

stdout | 2.test.js > test 2
normal test 2

stdout | 2.test.js > test 2
global after each - expected to run after EACH test file

stdout | unknown test
global after all - expected to run after ALL tests
```

</td>

<td>

```sh
stdout | unknown test
global before all - expected to run before ALL tests

stdout | unknown test
global before each - exptected to run before EACH test file

stdout | 1.test.js > test 1
normal test 1

stdout | 2.test.js > test 2
normal test 2

stdout | unknown test
global after each - expected to run after EACH test file

stdout | unknown test
global after all - expected to run after ALL tests
```

</td>
</tr>
</tbody>
</table>
