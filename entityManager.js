class EntityManager{
    constructor(){
        this.entities = []
    }

    update(ctx){
        this.entities.forEach(e, () => {
            e.draw(ctx)
            e.update()
        })
    }

}