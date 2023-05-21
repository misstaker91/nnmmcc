const Narozeniny = () => {
    
    return (
        <div>
            <h1>Vyznamne dny</h1>
            <div className="longdiv">
                <label htmlFor="nazev">Nazev</label>
                <input type="text" placeholder="Babicka Irenka" id="nazev"/>
                
                <label htmlFor="Datum">Datum</label>
                <input type="date" placeholder="Babicka Irenka" id="nazev"/>
                
                <fieldset>
                <legend>Kdy oznamit?</legend>

                <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">1 den predem</label>
                </div>

                <div>
                <input type="checkbox" id="horns" name="horns"/>
                <label htmlFor="horns">3 den predem</label>
                </div>
                <div>
                <input type="checkbox" id="c" name="c"/>
                <label htmlFor="c">7 dni predem</label>
                </div>
                <div>
                <input type="checkbox" id="s" name="s"/>
                <label htmlFor="s">Mesic predem</label>
                </div>
                <div>
                <input type="checkbox" id="f" name="f"/>
                <label htmlFor="f">dva mesice predem</label>
                </div>
                </fieldset>
                
                <fieldset>
                <legend>Typ Oznameni</legend>

                <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Email</label>
                </div>

                <div>
                <input type="checkbox" id="horns" name="horns"/>
                <label htmlFor="horns">SMS</label>
                </div>
                <div>
                <input type="checkbox" id="c" name="c"/>
                <label htmlFor="c">Push notifikace (Pouze pro mobilni zarizeni)</label>
                </div>
                
                </fieldset>
                <label htmlFor="Datum">Napady</label>
                <input type="textarea" placeholder="Babicka Irenka" id="nazev"/>
                
            </div>
        </div>
    )
}

export default Narozeniny
