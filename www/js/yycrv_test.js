$(function () {
  consoleInit();
  start(main);
});

async function main() {
  print_warning();

  const yCrvTokenAddr = YCRV_TEST_ADDR;
  const yyCrvTokenAddr = YYCRV_TEST_ADDR;
  const stakingTokenTicker = "yCrv";

  const rewardPoolAddr = YYCRV_TEST_ADDR;
  const rewardTokenAddr = YYCRV_TEST_ADDR;
  const rewardTokenTicker = "yyCrv";

  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}`);
  _print("Reading smart contracts...\n");
  _print(`yCrv Address: ${yCrvTokenAddr}`);
  _print(`yyCrv Address: ${yyCrvTokenAddr}\n`);

  const yCRV_TOKEN = new ethers.Contract(yCrvTokenAddr, YCRV_ABI, App.provider);
  const yyCRV_TOKEN = new ethers.Contract(yyCrvTokenAddr, YYCRV_ABI, App.provider);
  const yCRVBalance = await yCRV_TOKEN.balanceOf(App.YOUR_ADDRESS) / 1e18;
  const yyCrvTotalSupply = await yyCRV_TOKEN.totalSupply() / 1e18;
  const yyCrvPool = await yyCRV_TOKEN.pool() / 1e18;

  const invest_yCRV = async function (amount) {
    return yyCrvContract_invest(yyCrvTokenAddr, yCrvTokenAddr, amount, App);
  };

  const redeem = async function (amount) {
    return yyCrvContract_redeem(yyCrvTokenAddr, amount, App);
  };

  const depositAll = async function () {
    return yyCrvContract_deposit_all(yyCrvTokenAddr, App);
  };

  const deposit = async function () {
    return yyCrvContract_deposit(yyCrvTokenAddr, App);
  };

  const withdraw = async function (amount) {
    return yyCrvContract_withdraw(yyCrvTokenAddr, amount, App);
  };

  const harvestToConsul = async function () {
    return yyCrvContract_harvest_to_consul(yyCrvTokenAddr, App);
  };

  const harvestToUniswap = async function () {
    return yyCrvContract_harvest_to_uniswap(yyCrvTokenAddr, App);
  };

  _print(`Total yCrv staked: ${yyCrvPool}`);
  _print(`Total yyCrv supply: ${yyCrvTotalSupply}`);
  _print(`\n`);

  _print_button_input(`Stake ${stakingTokenTicker}`, yCRVBalance, invest_yCRV);
  _print_button_input(`Unstake`, 0, redeem);

  
  _print(`\n\n <a href="https://rinkeby.etherscan.io/address/0xe0f88584bf7e843af50c0bf3d53591566128773f#code">fake yCrv and y3d Faucet ⬅️</a>`);

  /*
  _print_button_input(`Withdraw ${rewardTokenTicker}`, 0, withdraw);
  _print_button(`Deposit All`, depositAll);
  _print_button(`Deposit`, deposit);
  _print_button(`Harvest To Consul`, harvestToConsul);
  _print_button(`Harvest To Uniswap`, harvestToUniswap);
  */

  hideLoading();
}
