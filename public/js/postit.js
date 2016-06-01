function Postit(postit) {
    if (typeof postit !== 'object')
        postit = {};

    var settings = _.extend(defaultPostitSettings, postit);

    this.position = new Vector(settings.position.x, settings.position.y);
    this.text = settings.text;
    this.isActive = settings.isActive;
    this.isLocked = settings.isLocked;
    this.id = settings.id;
    this.textColor = new Color(settings.textColor);
    this.backgroundColor = new Color(settings.backgroundColor);
}