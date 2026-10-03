interface Channel {
    unsubscribe(): Promise<unknown>;
}

export default Channel;