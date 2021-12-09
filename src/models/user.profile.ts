import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';
import User from './user';

interface UserProfileInterface {
    id?: string;
    userId: string;
    serviceId: string;
    picture: string;
    countryId: string;
    stateId: string;
    cityId: string;
    moreAddress: string;
    description: string;
}

interface UserProfileCreationInterface extends Optional<UserProfileInterface, 'id'> { };

interface UserProfileInstance extends Model<UserProfileInterface, UserProfileCreationInterface>, UserProfileInterface {
    createdAt?: Date;
    updatedAt?: Date;
}

const UserProfile = sequelize.define<UserProfileInstance>(
    'UserProfile',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        userId: {
            allowNull: true,
            type: DataTypes.UUID,
        },
        serviceId: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        picture: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        countryId: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        stateId: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        cityId: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        moreAddress: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        }
    }
);

UserProfile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

export default UserProfile;