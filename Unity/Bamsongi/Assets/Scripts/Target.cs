using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Target : MonoBehaviour
{
    private void OnCollisionEnter(Collision other)
    {
        // ����̰� �浹���� ��, GameDirector�� ã�� ���� ���� �޼��� ����
        GameObject.Find("GameDirector").GetComponent<GameDirector>().ScoreUp();
    }
}