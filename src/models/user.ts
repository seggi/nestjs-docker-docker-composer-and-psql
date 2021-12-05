import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from ".";
import UserProfile from './user.profile';

export interface UserInterface {
  id: string,
  firstname: string;
  lastname: string;
  birthdate: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  status: boolean;
  confirmed: boolean;
};

interface UserCreationInterface extends Optional<UserInterface, 'id'> { }

export class User extends Model<UserInterface, UserCreationInterface> {
  public id!: number
  public firstname!: string;
  public lastname!: string;
  public birthdate!: number;
  public gender!: string;
  public email!: string;
  public phone!: string;
  public username!: string;
  public password!: string;
  public status!: boolean;
  public confirmed!: boolean;
  public readonly createAt?: Date;
  public readonly updateAt?: Date;
}

// Create the User table 
User.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },

    lastname: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    birthdate: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    gender: {
      type: new DataTypes.STRING(10),
      allowNull: true
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    phone: {
      type: new DataTypes.STRING(50),
      allowNull: true
    },
    username: {
      type: new DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    status: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    confirmed: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
  },

  {
    tableName: "user",
    sequelize: sequelize
  }

);

User.hasMany(UserProfile, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'userId'
})

export default User;
