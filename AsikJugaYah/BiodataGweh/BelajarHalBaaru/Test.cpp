#include <iostream>

int main() {
    // Deklarasi variabel
    int sisi;

    // Input sisi persegi
    std::cout << "Masukkan sisi persegi: ";
    std::cin >> sisi;

    // Hitung luas persegi
    int luas = sisi * sisi;

    // Tampilkan hasil
    std::cout << "Luas persegi adalah: " << luas << std::endl;

    return 0;
}