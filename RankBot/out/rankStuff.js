"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suspendPlayer = exports.firePlayer = exports.setRankPlayer = exports.demotePlayer = exports.promotePlayer = exports.setGroup = void 0;
const noblox_js_1 = require("noblox.js");
let group = -1;
function setGroup(groupId) {
    group = groupId;
}
exports.setGroup = setGroup;
async function promotePlayer(player) {
    if (typeof player == 'number') {
        let rank = await (0, noblox_js_1.getRankNameInGroup)(group, player);
        if (rank != 'Guest') {
            (0, noblox_js_1.changeRank)(group, player, 1);
            return undefined;
        }
    }
    else {
        (0, noblox_js_1.getIdFromUsername)(player)
            .then(async (ida) => {
            await (0, noblox_js_1.getRankNameInGroup)(group, ida).then(rank => {
                if (rank != 'Guest') {
                    (0, noblox_js_1.promote)(group, ida);
                    return undefined;
                }
            });
        })
            .catch(() => {
            return "This user does not exist or was typed wrong";
        });
    }
    return "This user does not exist or was typed wrong";
}
exports.promotePlayer = promotePlayer;
async function demotePlayer(player) {
    if (typeof player == 'number') {
        let rank = await (0, noblox_js_1.getRankNameInGroup)(group, player);
        if (rank != 'Guest') {
            (0, noblox_js_1.demote)(group, player);
            return undefined;
        }
    }
    else {
        (0, noblox_js_1.getIdFromUsername)(player)
            .then(async (ida) => {
            await (0, noblox_js_1.getRankNameInGroup)(group, ida).then(rank => {
                if (rank != 'Guest') {
                    (0, noblox_js_1.demote)(group, ida);
                    return undefined;
                }
            });
        })
            .catch(() => {
            return "This user does not exist or was typed wrong";
        });
    }
    return "This user does not exist or was typed wrong";
}
exports.demotePlayer = demotePlayer;
async function setRankPlayer(player, rank) {
    if (typeof player == "number") {
        await (0, noblox_js_1.getRankNameInGroup)(group, player).then(rank => {
            if (rank != 'Guest') {
                (0, noblox_js_1.setRank)(group, player, rank);
                return undefined;
            }
        });
    }
    else {
        (0, noblox_js_1.getIdFromUsername)(player)
            .then(async (ida) => {
            await (0, noblox_js_1.getRankNameInGroup)(group, ida).then(rank => {
                if (rank != 'Guest') {
                    (0, noblox_js_1.setRank)(group, ida, rank);
                    return undefined;
                }
            });
        })
            .catch(() => {
            return "This user does not exist or was typed wrong";
        });
    }
    return "This user does not exist or was typed wrong";
}
exports.setRankPlayer = setRankPlayer;
async function firePlayer(player) {
    if (typeof player == "number") {
        await (0, noblox_js_1.getRankNameInGroup)(group, player).then(rank => {
            if (rank != 'Guest') {
                (0, noblox_js_1.setRank)(group, player, 1);
                return undefined;
            }
        });
    }
    else {
        (0, noblox_js_1.getIdFromUsername)(player)
            .then(async (ida) => {
            await (0, noblox_js_1.getRankNameInGroup)(group, ida).then(rank => {
                if (rank != 'Guest') {
                    (0, noblox_js_1.setRank)(group, ida, 1);
                    return undefined;
                }
            });
        })
            .catch(() => {
            return "This user does not exist or was typed wrong";
        });
    }
    return "This user does not exist or was typed wrong";
}
exports.firePlayer = firePlayer;
async function suspendPlayer(player) {
    if (typeof player == "number") {
        await (0, noblox_js_1.getRankNameInGroup)(group, player).then(rank => {
            if (rank != 'Guest') {
                (0, noblox_js_1.setRank)(group, player, 4);
                return undefined;
            }
        });
    }
    else {
        (0, noblox_js_1.getIdFromUsername)(player)
            .then(async (ida) => {
            await (0, noblox_js_1.getRankNameInGroup)(group, ida).then(rank => {
                if (rank != 'Guest') {
                    (0, noblox_js_1.setRank)(group, ida, 4);
                    return undefined;
                }
            });
        })
            .catch(() => {
            return "This user does not exist or was typed wrong";
        });
    }
    return "This user does not exist or was typed wrong";
}
exports.suspendPlayer = suspendPlayer;
