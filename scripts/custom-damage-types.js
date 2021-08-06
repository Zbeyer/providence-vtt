Hooks.once('setup', () =>
{
	// Kyle this is where you define custom names
	let customDamageInserts = [
		'Magnetic',
		'Charge',
		'Negative Chroma'
	];

	// Thank reddit: https://www.reddit.com/r/FoundryVTT/comments/iy1dv7/custom_damage/
	console.log('providence-vtt | Initializing');

	// ZBEYER reading how to do
	// const abl = this.data.data.abilities;
	// let abl = this.data._source.data.abilities;

	customDamageInserts.forEach(function (damageName)
	{
		let key = damageName.replace(/[\. ,:-]+/g, "-").toLowerCase().trim();
		CONFIG.DND5E.damageTypes[key] = damageName;
		CONFIG.DND5E.damageResistanceTypes[key] = damageName;
	});
	// CONFIG.DND5E.damageTypes['bacon'] = 'Bacon';
	// CONFIG.DND5E.damageTypes['meat'] = 'Meat';
	// CONFIG.DND5E.damageTypes['Bile'] = 'Bile';

	// I have no idea what this was trying to solve, Discord...
	//      https://discord.com/channels/170995199584108546/670336046164213761/873087300509253672
	// const abl = this?.data?.data?.abilities;
	// let abl = this?.data?._source?.data?.abilities;

	CONFIG.DND5E.abilityAbbreviations['aur'] = 'aur';
	CONFIG.DND5E.abilities['aur'] = 'Aura';

	// CONFIG.DND5E.hitDieTypes.push('d20');
	//
	// CONFIG.DND5E.currencies['pd'] = 'P5EEXTRA.CurrencyPD';
	//
	// CONFIG.DND5E.conditionTypes['asleep'] = "P5EEXTRA.ConAsleep";
	// CONFIG.DND5E.conditionTypes['burned'] = "P5EEXTRA.ConBurned";
	// CONFIG.DND5E.conditionTypes['confused'] = "P5EEXTRA.ConConfused";
	CONFIG.DND5E.conditionTypes['flinchy'] = "Flinchy flinched";
	// CONFIG.DND5E.conditionTypes['frozen'] = "P5EEXTRA.ConFrozen";

	// debug learning / logging
	//console.log('zbeyer: CONFIG.DND5E: %o', CONFIG.DND5E);
	//console.log('zbeyer: CONFIG.DND5E.damageTypes: %o', CONFIG.DND5E.damageTypes);
	console.log('zbeyer: CONFIG.DND5E.abilityAbbreviations: %o', CONFIG.DND5E.abilityAbbreviations);
	console.log('zbeyer: CONFIG.DND5E.abilities: %o', CONFIG.DND5E.abilities);
});
