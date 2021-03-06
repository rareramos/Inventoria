Meteor.startup(() => {
  Accounts.validateNewUser((user) => {
    if (user.emails && user.emails[0].address.length !== 0) {
      return true;
    }
    throw new Meteor.Error(403, 'E-Mail address should not be blank');
  });
  Accounts.validateNewUser((user) => {
    if (user.username && user.username.length >= 3) {
      return true;
    }
    throw new Meteor.Error(403, 'Username must have at least 3 characters');
  });
});

S3.config = {
		key: 'AKIAJIJL7YZFXHH7RQKQ',
		secret: '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',
		bucket: 'imagescanvasbucket',
		region: 'us-west-2'

	};