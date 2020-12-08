import { beeMovie, beeMovieScript, beeMovieVersion, beeMovieWord } from ".."
import { expect } from "chai"
describe('beeMovie', function(){
    it("beeMovie() should execute without any errors", function(){
        expect(beeMovie(1)).to.be.a('string');
        expect(beeMovie(2)).to.be.a('string');
    });
    it("beeMovieScript() should execute without any errors", function(){
        expect(beeMovieScript()).to.be.a('string');
    });
    it("beeMovieVersion() should execute without any errors", function(){
        expect(beeMovieVersion()).to.be.a('string');
        //console.log("v"+beeMovieVersion());
    });
    it("beeMovieWord() should execute without any errors", function(){
        expect(beeMovieWord(1)).to.be.a('string');
        //console.log(beeMovieWord(69));
    });
});
