import express from 'express';
import { expect } from 'chai';
import {agent as request} from 'supertest';
import app from '../src/app';

const route = express.Router();


describe("GET /", () => {
  it('should always pass', function () {
    expect(true).to.equal(true);
  });
  it("should return an object with translated prop", async () => {
    const res = await request(app)
        .get('/?translate=001');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body).haveOwnPropertyDescriptor('translated');

   });
  it("should return an erro of min digits", async () => {
    const res = await request(app)
        .get('/?translate=1');
    expect(res.status).to.equal(400);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body).haveOwnPropertyDescriptor('error');
   });

  it("should return an erro of using not numbers", async () => {
    const res = await request(app)
        .get('/?translate=ash');
    expect(res.status).to.equal(400);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body).haveOwnPropertyDescriptor('error');
   });

  it("should return an erro max value permitted", async () => {
    const res = await request(app)
        .get('/?translate=001000000000000000000000000000000000');
    expect(res.status).to.equal(400);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body).haveOwnPropertyDescriptor('error');
   });

  })
