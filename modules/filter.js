

module.exports = class Filter{
    constructor(dataArray){
        this.dataArray = dataArray
    }

    getData(){
        return this.dataArray
    }

    //BY ID
    id(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => data.Key == arg)
        return this
    }

    //BY TEMPERATURE
    temp(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => data.Record.temperature == arg)
        return this
    }

    lowerTemp(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => parseInt(data.Record.temperature) >= parseInt(arg))
        return this
    }

    greaterTemp(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => parseInt(data.Record.temperature) <= parseInt(arg))
        return this
    }

    //BY DEVICE
    device(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => data.Record.device == arg)
        return this
    }

    //BY NODE
    node(arg){
        if(arg === undefined || arg == "") return this
        this.dataArray = this.dataArray.filter(data => data.Record.node == arg)
        return this
    }

}
