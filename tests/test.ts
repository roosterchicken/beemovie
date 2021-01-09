import barry from ".."
import { expect } from "chai"
describe('beeMovie', function(){
    it("barry.Sentence() should execute without any errors", () => {
        expect(barry.Sentence(1)).to.be.a('string');
        expect(barry.Sentence(2)).to.be.a('string');
    });
    it("barry.Script() should execute without any errors", () => {
        expect(barry.Script()).to.be.a('string');
    });
    it("barry.Version() should execute without any errors", () => {
        expect(barry.Version()).to.be.a('string');
        //console.log("v"+beeMovieVersion());
    });
    it("barry.Word() should execute without any errors", () => {
        expect(barry.Word(1)).to.be.a('string');
        //console.log(beeMovieWord(69));
    });
    it("barry.Paragraph() should execute without any errors", () => {
        expect(barry.Paragraph(1)).to.be.a('string');
        expect(barry.Paragraph(2)).to.be.a('string');
    });
});
