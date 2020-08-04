/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

export interface Config
{
    pwEmail: string;
    pwPassword: string;
    apiKey: string;
    checkTime: number;
    subject: string;
    checksToRelogin: number;
    message?: string;
}

export class Config implements Config {};

export interface Nation
{
    id: number;
    name: string;
    leader: string;
    score: number;
    cities: number;
    founded: number;
}

export class Nation implements Nation {};

export interface WebViewerSettings
{
    maxSentMessages: number;
    databaseFile: string;
}

export interface WebViewerDatabase
{
    messages: Array<SentMessage>;
    apiKeyDetails: ApiKeyDetails;
    lastChecked: number;
}

export interface ApiKeyDetails
{
    totalRequests: number;
    remainingRequests: number;
}

export class ApiKeyDetails implements ApiKeyDetails {};

export interface SentMessage
{
    nation: Nation;
    successful: boolean;
}

export class SentMessage implements SentMessage {};

export interface NewMessageOptions
{
    receiver?: string;
    carboncopy?: string;
    subject?: string;
    body?: string;
}

export class NewMessageOptions implements NewMessageOptions {};