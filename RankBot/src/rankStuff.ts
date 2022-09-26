import { promote, demote, setRank, getIdFromUsername, getRankNameInGroup, changeRank } from 'noblox.js'

let group = -1;

export function setGroup(groupId: number) {
    group = groupId;
}


export async function promotePlayer(player: string | number) {
    if(typeof player == 'number') {
        let rank = await getRankNameInGroup(group, player)
            if(rank != 'Guest') {
                changeRank(group, player, 1)
                return undefined;
            }
    } else {
        getIdFromUsername(player)
        .then(async ida => {
            await getRankNameInGroup(group, ida).then(rank => {
                if(rank != 'Guest') {
                    promote(group, ida);
                    return undefined;
                }
            })
        })
        .catch(() => {
            return "This user does not exist or was typed wrong";
        })
    }
    return "This user does not exist or was typed wrong";
}

export async function demotePlayer(player: string | number) {
    if(typeof player == 'number') {
        let rank = await getRankNameInGroup(group, player)
            if(rank != 'Guest') {
                demote(group, player);
                return undefined;
            }
    } else {
        getIdFromUsername(player)
        .then(async ida => {
            await getRankNameInGroup(group, ida).then(rank => {
                if(rank != 'Guest') {
                    demote(group, ida);
                    return undefined;
                }
            })
        })
        .catch(() => {
            return "This user does not exist or was typed wrong";
        })
    }
    return "This user does not exist or was typed wrong";
}

//NOT IMPLEMENTED
export async function setRankPlayer(player: string | number, rank: number) {
    if(typeof player == "number") {
        await getRankNameInGroup(group, player).then(rank => {
            if(rank != 'Guest') {
                setRank(group, player, rank);
                return undefined;
            }
        })
    } else {
        getIdFromUsername(player)
        .then(async ida => {
            await getRankNameInGroup(group, ida).then(rank => {
                if(rank != 'Guest') {
                    setRank(group, ida, rank);
                    return undefined;
                }
            })
        })
        .catch(() => {
            return "This user does not exist or was typed wrong";
        })
    }
    return "This user does not exist or was typed wrong";
}

export async function firePlayer(player: string | number) {
    if(typeof player == "number") {
        await getRankNameInGroup(group, player).then(rank => {
            if(rank != 'Guest') {
                setRank(group, player, 1);
                return undefined;
            } 
        })
    } else {
        getIdFromUsername(player)
        .then(async ida => {
            await getRankNameInGroup(group, ida).then(rank => {
                if(rank != 'Guest') {
                    setRank(group, ida, 1);
                    return undefined;
                }
            })
        })
        .catch(() => {
            return "This user does not exist or was typed wrong";
        })
    }
    return "This user does not exist or was typed wrong";
}

export async function suspendPlayer(player: string | number) {
    if(typeof player == "number") {
        await getRankNameInGroup(group, player).then(rank => {
            if(rank != 'Guest') {
                setRank(group, player, 4);
                return undefined;
            }
        })
    } else {
        getIdFromUsername(player)
        .then(async ida => {
            await getRankNameInGroup(group, ida).then(rank => {
                if(rank != 'Guest') {
                    setRank(group, ida, 4);
                    return undefined;
                }
            })
        })
        .catch(() => {
            return "This user does not exist or was typed wrong";
        })
    }
    return "This user does not exist or was typed wrong";
}