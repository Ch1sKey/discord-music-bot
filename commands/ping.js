const { SlashCommand, ApplicationCommandPermissionType } = require('slash-create');

module.exports = class PingCommand extends SlashCommand {
  constructor(creator) {
    const permissions = {
      [process.env.DISCORD_GUILD_ID]: [
        {
          type: ApplicationCommandPermissionType.ROLE,
          id: '297497241390809090',
          permission: true
        }
      ], 
    };
    super(creator, {
      name: 'ping',
      description: 'Ping a bot',
      defaultPermission: false,
      guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined,
      permissions,
    });
  }

  async run (ctx) {
    await ctx.defer();
    console.log(process.env.DISCORD_GUILD_ID);
    return void ctx.sendFollowUp({ content: 'Pong!' });
  }
};
