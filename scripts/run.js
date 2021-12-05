const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('SayHello');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let helloCount;
    helloCount = await waveContract.getTotalHellos();

    let hello = await waveContract.sayHello();
    await hello.wait();

    helloCount = await waveContract.getTotalHellos();

    hello = await waveContract.connect(randomPerson).sayHello();
    await hello.wait();

    helloCount = await waveContract.getTotalHellos();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();