import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    {
        id: 1, 
        name: "Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77,
        },
    },
    {
        id: 3,
        name: "Robert Lewandowski",
        club: "Bayern Munich",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 78,
            Shooting: 94,
            Passing: 79,
            Dribbling: 86,
            Defending: 40,
            Physical: 82,
        },
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78,
        },
    },
    {
        id: 5,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 91,
            Shooting: 87,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75,
        },
    },
    {
        id: 6,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 85,
            Passing: 86,
            Dribbling: 94,
            Defending: 37,
            Physical: 58,
        },
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number):Promise<PlayerModel| undefined> => {

    return database.find( player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex( player => player.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true;
    }

    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex( (player) => player.id === id);

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}