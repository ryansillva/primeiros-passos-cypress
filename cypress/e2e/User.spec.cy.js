import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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

    myInfoPage.fillPersonalDetails('Ryan', 'Silva')
    myInfoPage.fillEmployeeDetails('EmployID', 'OtherID', 'Drivers Number', '2025-03-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForms()
  })
})