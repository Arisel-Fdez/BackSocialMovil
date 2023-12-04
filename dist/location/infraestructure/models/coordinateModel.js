"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = __importDefault(require("../../../user/infraestructure/models/userModel"));
const sequelize_typescript_2 = require("sequelize-typescript");
let CoordinateModel = class CoordinateModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_2.ForeignKey)(() => userModel_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
], CoordinateModel.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false
    })
], CoordinateModel.prototype, "latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false
    })
], CoordinateModel.prototype, "longitude", void 0);
CoordinateModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'coordinates',
        timestamps: true
    })
], CoordinateModel);
exports.default = CoordinateModel;
