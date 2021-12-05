import { DataTypes, Model, Optional } from "sequelize/dist";
import sequelizeConnection from '../config';

interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  createAt?: Date;
  updateAt?: Date;
};