import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

var Chance = require('chance');
var moment = require('moment');
//moment().format();


const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.acessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.prefix(), chance.string(), chance.integer(), moment().format("YYYY-MM-DD"))
    myInfoPage.fillStatus()
    myInfoPage.saveForms()
  })
})