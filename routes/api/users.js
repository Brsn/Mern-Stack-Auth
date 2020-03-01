const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypts");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User Model
const User = require("../../models/Account");