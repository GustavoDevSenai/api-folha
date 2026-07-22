const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Folha = sequelize.define(
  "Folha",
  {
    funcionarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    salarioBruto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    inss: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    fgts: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    descontoValeTransporte: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    descontoPlanoSaude: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    salarioLiquido: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "Folhas",
    timestamps: true,
  }
);

module.exports = Folha;