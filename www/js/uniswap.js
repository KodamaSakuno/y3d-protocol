$(function() {
    consoleInit();
    start(main);
});

async function main() {
    const uniSwapPoolAddr = "0xcd4079b9713cdd1e629492b9c07ebd0dbd9f5202";
    const y3DTokenAddr = PASTA_TOKEN_ADDR;
    const y3DTokenTicker = "Y3D";
    const rewardPoolAddr = WETH_REWARD_ADDR;    
    const rewardTokenTicker = "Y3D";    
    const yyCrvTokenAddr = YYCRV_TEST_ADDR;
    const yyCrvTokenTicker = "yyCrv";

    const inputTokenAddr = "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8";

    const stakingToken = WETH_TOKEN_ADDR;
    const stakingTokenTicker = "yCrv";
    const rewardTokenAddr = PASTA_TOKEN_ADDR;

    const App = await init_ethers();

    const Y3D_TOKEN = new ethers.Contract(y3DTokenAddr, ERC20_ABI, App.provider);
    const YYCRV_TOKEN = new ethers.Contract(yyCrvTokenAddr, YYCRV_ABI, App.provider);

    const totalY3DPoolAmount = await Y3D_TOKEN.balanceOf(uniSwapPoolAddr) / 1e18;
    const totalYYCRVPoolAmount = await YYCRV_TOKEN.balanceOf(uniSwapPoolAddr) / 1e18;
    const stakingTokenPrice = 1.07;
    _print("========== UNISWAP ==========")
    _print(`${totalYYCRVPoolAmount} ${yyCrvTokenTicker}`);
    _print(`${totalY3DPoolAmount} ${y3DTokenTicker}`);
    _print(`1 Y3D♨️ = ${toDollar(totalYYCRVPoolAmount / totalY3DPoolAmount * stakingTokenPrice)}`);    
//    _print("============== STAKING ==============")
    /*
//    _print(`There are total   : ${totalSupplyY} ${stakingTokenTicker}.`);
    _print(`There are total   : ${totalStakedYAmount} ${stakingTokenTicker} staked in ${rewardTokenTicker}'s ${stakingTokenTicker} staking pool.`);
    _print(`There are total   : ${miningAmount} in staking pool which minning CRV in <a href="https://etherscan.io/address/0xfa712ee4788c042e2b7bb55e6cb8ec569c4530c1#tokentxns">yCrv Gauge</a>.`);
    _print(`There are total   : ${totalTotalYAmount - totalStakedYAmount} ${stakingTokenTicker} in profit pool which ready to claim.`);
    _print(`You are staking   : ${stakedYAmount} ${stakingTokenTicker} (${toFixed(stakedYAmount * 100 / totalStakedYAmount, 3)}% of the pool)`);*/
    _print(`\n======== ♨️ Mining Pool 2 ========`);
    _print(`Pool              : <a href="https://etherscan.io/address/${rewardPoolAddr}">${rewardPoolAddr}</a> | <a href="https://www.diffchecker.com/thQp6Mak">Diff</a>`);
    _print(`Input             : <a href="https://etherscan.io/address/${inputTokenAddr}#code">Uniswap Y3D-yyCrv LP</a>`);
    _print(`Output            : <a href="https://etherscan.io/address/${rewardTokenAddr}#code">♨️</a>`);    
    /*
    _print(`Claimable Rewards : ${toFixed(earnedYFFI, 4)} ${rewardTokenTicker} = $${toFixed(earnedYFFI * rewardTokenPrice, 2)}`);
    const YFFIWeeklyEstimate = rewardPerToken * stakedYAmount;
    _print(`Hourly estimate   : ${toFixed(YFFIWeeklyEstimate / (24 * 7), 4)} ${rewardTokenTicker} = ${toDollar((YFFIWeeklyEstimate / (24 * 7)) * rewardTokenPrice)} (out of total ${toFixed(weekly_reward / (7 * 24), 2)} ${rewardTokenTicker})`)
    _print(`Daily estimate    : ${toFixed(YFFIWeeklyEstimate / 7, 2)} ${rewardTokenTicker} = ${toDollar((YFFIWeeklyEstimate / 7) * rewardTokenPrice)} (out of total ${toFixed(weekly_reward / 7, 2)} ${rewardTokenTicker})`)
    _print(`Weekly estimate   : ${toFixed(YFFIWeeklyEstimate, 2)} ${rewardTokenTicker} = ${toDollar(YFFIWeeklyEstimate * rewardTokenPrice)} (out of total ${weekly_reward} ${rewardTokenTicker})`)*/
    _print(`Mining start      : TBD`);
    _print(`P3D ratio         : 5%`);  
    hideLoading();
}