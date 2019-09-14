function dateStringFromTodayDelta(deltaDays) {
    const todayMillis = new Date().getTime();
    const millis = todayMillis + deltaDays * 1000 * 60 * 60 * 24;
    return new Date(millis).toISOString().substr(0, 10);
}

