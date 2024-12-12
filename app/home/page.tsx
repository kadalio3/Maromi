import React from "react";
import Image from "next/image";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Body */}
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Title Card</h2>
              <p className="text-gray-600 mb-4">
                Isi Card yang dapat Anda isi dengan teks atau gambar.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  User
                </span>
                <span className="text-sm text-gray-600">Indonesia</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 2</h2>
              <p className="text-gray-600">Deskripsi card 2</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 3</h2>
              <p className="text-gray-600">Deskripsi card 3</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 4</h2>
              <p className="text-gray-600">Deskripsi card 4</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 5</h2>
              <p className="text-gray-600">Deskripsi card 5</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 6</h2>
              <p className="text-gray-600">Deskripsi card 6</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 7</h2>
              <p className="text-gray-600">Deskripsi card 7</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 8</h2>
              <p className="text-gray-600">Deskripsi card 8</p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 9</h2>
              <p className="text-gray-600">Deskripsi card 9</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/ 4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 10</h2>
              <p className="text-gray-600">Deskripsi card 10</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 11</h2>
              <p className="text-gray-600">Deskripsi card 11</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 12</h2>
              <p className="text-gray-600">Deskripsi card 12</p>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 13</h2>
              <p className="text-gray-600">Deskripsi card 13</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 14</h2>
              <p className="text-gray-600">Deskripsi card 14</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 15</h2>
              <p className="text-gray-600">Deskripsi card 15</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 16</h2>
              <p className="text-gray-600">Deskripsi card 16</p>
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 17</h2>
              <p className="text-gray-600">Deskripsi card 17</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 18</h2>
              <p className="text-gray-600">Deskripsi card 18</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 19</h2>
              <p className="text-gray-600">Deskripsi card 19</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">Card 20</h2>
              <p className="text-gray-600">Deskripsi card 20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
