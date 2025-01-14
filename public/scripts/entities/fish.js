class Fish extends Denizen {

  constructor(options) {
    super(options);
    this.waterFriction = 0.1; // 10% friction when swimming normally
    this.imageUri = '/images/fish01.png';
    this.deadImageUri = '/images/fish_dead.png';
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
    this.isTasty = true;
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    this.swimVelocity = this.swimVelocity.scale( 1 - this.waterFriction * PHYSICS_TICK_SIZE_S);
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }

  kill(duration) {
    this.swimVelocity = new Vector(0, -100);
    this.timeUntilSpeedChange = 100;
    this.imageUri = this.deadImageUri;
    setTimeout( () => super.kill(), 10000); // Remove fish 10s later
  }
}

