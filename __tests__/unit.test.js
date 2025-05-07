// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() tests
test('checks if a valid phone number returns true', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('checks if a valid phone number without an area code returns true', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('checks if a phone number without hyphens returns false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('checks if an invalid phone number returns false', () => {
  expect(isPhoneNumber('this is not a phone number')).toBe(false);
});

// isEmail() tests
test('checks if a valid email returns true', () => {
  expect(isEmail('thisisanemail@gmail.com')).toBe(true);
});

test('checks if a valid email with underscores returns true', () => {
  expect(isEmail('this_is_an_email@gmail.com')).toBe(true);
});

test('checks if an invalid email returns false', () => {
  expect(isEmail('this is an email with spaces@gmail.com')).toBe(false);
});

test('checks if an email missing the @ and . returns false', () => {
  expect(isEmail('thisisanemailatgmaildotcom')).toBe(false);
});

// isStrongPassword() tests
test('checks if a password of the correct length starting with a letter returns true', () => {
  expect(isStrongPassword('astrongpassword')).toBe(true);
});

test('checks if a password of the correct length with numbers and underscores returns true', () => {
  expect(isStrongPassword('a_1derful_pass')).toBe(true);
});

test('checks if a password starting with a number returns false', () => {
  expect(isStrongPassword('2beornot2be')).toBe(false);
});

test('checks if a password more than 15 characters long returns false', () => {
  expect(isStrongPassword('thispasswordisreallyreallylong')).toBe(false);
});

// isDate() tests

test('checks if a valid date returns true', () => {
  expect(isDate('5/6/2025')).toBe(true);
});

test('checks if a valid non-American date returns true', () => {
  expect(isDate('6/5/2025')).toBe(true);
});

test('checks if a date with hyphens returns false', () => {
  expect(isDate('5-6-2025')).toBe(false);
});

test('checks if a date with a two digit year returns false', () => {
  expect(isDate('5/6/25')).toBe(false);
});

// isHexColor() tests
test('checks if a valid hex color value with only letters returns true', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('checks if a valid hex color value without the # returns true', () => {
  expect(isHexColor('ffffff')).toBe(true);
});

test('checks if a hex color value that is too short returns false', () => {
  expect(isHexColor('#gg')).toBe(false);
});

test('checks if an invalid hex color value returns false', () => {
  expect(isHexColor('#thisisnotahexcolor')).toBe(false);
});