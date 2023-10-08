import axios from "axios" ;
export default{
    namespaced : true,
    state : {
        countries : [],
        specs : []
    },
    getters : {
        countries : state => state.countries ,
        specs : state => state.specs ,
    },
    mutations : {
        // set countries 
        SET_COUNTRIES( state, countries ){
            state.countries = countries ;
        },
        // set spec 
        SET_SPEC( state, specs ){
            state.specs = specs ;
        },
    },
    actions : {
        // get countries 
        getCountries({commit}){
            return axios.get('/global')
            .then( (res)=>{
                const response = res.data.data.countries ;
                commit('SET_COUNTRIES', response)

                const specs = res.data.data.specializations;
                commit('SET_SPEC', specs);

                console.log(res.data.data.specializations)
                console.log(res.data)

            } )
        },
        
    }

}